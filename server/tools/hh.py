import json
from datetime import datetime,timedelta
LEAGUES = ['en/', 'es/', 'de/', 'it/', 'fr/']
JSON_DIRECTORY = '../Json/'
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

today = '0902'
league = 1 
year = 2023

today_month = int(today[:2])
today_day = int(today[2:])
today = f"{today[:2]}/{today[2:]}"
data = None
if today_month < 8:
    file_path = f'{JSON_DIRECTORY}matches/{LEAGUES[league-1]}{year-1}-{year}.json'
else:
    file_path = f'{JSON_DIRECTORY}matches/{LEAGUES[league-1]}{year}-{year+1}.json'
data = read_json(file_path)

if today in data.keys():
    today_data = data.get(today, [])
    for match in today_data:
        print(match)
        if '-' in match.get('ST', ''):
            match['state'] = 'Full Time'
            continue
        match_time = datetime.strptime(match.get('ST', ''), '%H:%M').time()
        # Create a datetime object for the match using the provided year, month, and day
        match_datetime = datetime(year, today_month, today_day, match_time.hour, match_time.minute)
        
        # if match_datetime < datetime.now() :
        #     match['state'] = 'Full Time'
        #     print(datetime.now(),"  ",match_datetime)
        # else:
        #     if match_datetime > datetime.now():
        #         diff = match_datetime -datetime.now()
        #         match['state'] = "Upcoming"
        #         match['ST'] = match['ST'] + ' GMT'
        #     else:
        #         time_since_start = datetime.now() - match_datetime
        #         if time_since_start >= timedelta(minutes=105):
        #             match['state'] = 'Full Time'
        #             print('FT')
                    
        #         else:
        #             print('time_since_start')
        #             match['state'] = 'Live'
        #             match['ST'] = '* - *'
                    
        if match_datetime > datetime.now():
            diff = match_datetime -datetime.now()
            match['state'] = "Upcoming"
            match['ST'] = match['ST'] + ' GMT'
        else :
            time_since_start = datetime.now() - match_datetime
            if time_since_start >= timedelta(minutes=105):
                match['state'] = 'Full Time'
                
            else:
                match['state'] = 'Live'
                match['ST'] = '   -   '