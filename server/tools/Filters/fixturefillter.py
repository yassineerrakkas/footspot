import json
import csv

def addid(dir, year):
    csv_filename ='all_the_names/' + dir + '-teams.csv'
    csv_data = []
    with open(csv_filename, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            csv_data.append(row)

    # Read and parse JSON data
    json_filename = '../Json/matches/' + dir + '/' + year + '.json'
    with open(json_filename, 'r', encoding='utf-8') as json_file:
        json_data = json.load(json_file)

    # Update JSON data with correct team names and IDs
    # for allmatches in  json_data:
    #     for allmatches_ in allmatches.values():
    #         for json_team in allmatches_:
    #             for csv_team in csv_data:
    #                 if json_team['team1'] in [csv_team['english_name'], csv_team['city'], csv_team['team'], csv_team['name_without_numbers']]:
    #                     json_team['team1'] = csv_team['team']
    #                     json_team['team1_id'] = int(csv_team['id'])
                        
    #                 if json_team['team2'] in [csv_team['english_name'], csv_team['city'], csv_team['team'], csv_team['name_without_numbers']]:
    #                     json_team['team2'] = csv_team['team']
    #                     json_team['team2_id'] = int(csv_team['id'])
    
    for value in json_data.values():
        for v in value:
            for csv_team in csv_data:
                if v['team1'] in [csv_team['english_name'], csv_team['city'], csv_team['team'], csv_team['name_without_numbers']]:
                    v['team1'] = csv_team['team']
                    v['team1_id'] = int(csv_team['id'])
                    
                if v['team2'] in [csv_team['english_name'], csv_team['city'], csv_team['team'], csv_team['name_without_numbers']]:
                    v['team2'] = csv_team['team']
                    v['team2_id'] = int(csv_team['id'])
    # Save the updated JSON data
    updated_json_filename ='../Json/matches/' + dir + '/' + year + '.json'
    with open(updated_json_filename, 'w', encoding='utf-8') as updated_json_file:
        json.dump(json_data, updated_json_file, indent=2, ensure_ascii=False)

for dir in ['en','es','de','it','fr']:
    for i in range(2013,2024):
        addid(dir, str(i))
print('all fiels are updated')