import json
for i in ['en','es','de','it','fr']:
    fixture = '../../Json/matches/'+i+'/2023-2024d.json'
    results = '../../Json/matches/'+i+'/2023-2024r.json'
    with open(fixture, 'r', encoding='utf-8') as fixture_f:
        f_data = json.load(fixture_f)
    with open(results, 'r', encoding='utf-8') as results_f:
        r_data = json.load(results_f)
    for key,value in r_data.items():
        f_data[key] = value
    with open('../../Json/matches/'+i+'/2023-2024.json', 'w', encoding='utf-8') as fixture_f:
        f_data = json.dump(f_data,fixture_f,indent=4)