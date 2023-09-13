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
    json_filename = '../Json/' + dir + '/' + year + '.json'
    with open(json_filename, 'r', encoding='utf-8') as json_file:
        json_data = json.load(json_file)

    # Update JSON data with correct team names and IDs
    for json_team in json_data:
        for csv_team in csv_data:
            if json_team['Team'] in [csv_team['english_name'], csv_team['city'], csv_team['team'], csv_team['name_without_numbers']]:
                json_team['Team'] = csv_team['team']
                json_team['id'] = int(csv_team['id'])
                break

    # Save the updated JSON data
    updated_json_filename = json_filename
    with open(updated_json_filename, 'w', encoding='utf-8') as updated_json_file:
        json.dump(json_data, updated_json_file, indent=2, ensure_ascii=False)
        print(json_filename, 'is updated')

for dir in ['en','es','de','it','fr']:
    for i in range(2023, 2024):
        addid(dir, str(i))
