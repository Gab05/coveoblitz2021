import argparse
from flask import Flask, request

app = Flask(__name__)


def find_paths_costs(req):
    distances = []
    for i in range(1, len(req['track'])):
        req['track'][i] = req['track'][i] + req['track'][i - 1]

    for item in req['items']:
        if item[0] == 0:
            distances.append(req['track'][item[1] - 1])
        elif item[1] == 0:
            distances.append(req['track'][item[0] - 1])
        else:
            distances.append(abs(req['track'][item[0] - 1] - req['track'][item[1] - 1]))

    return str(distances)


@app.route('/microchallenge', methods=['POST'])
def microchallenge():
    return find_paths_costs(request.get_json())


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Microchallenge Starter Pack')
    parser.add_argument('-p', metavar='p', type=int, default=27178)

    args = parser.parse_args()
    app.run(port=args.p, host="0.0.0.0")
