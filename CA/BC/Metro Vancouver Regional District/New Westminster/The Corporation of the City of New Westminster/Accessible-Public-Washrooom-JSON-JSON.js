// Copyright 2019 TerraTap Technologies Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports =
    {
        doConvert: function(data)
        {
            return convert(data);
        }
    };

function convert(data)
{
    var json = {};

    json.type     = "FeatureCollection";
    json.features = [];

    var lines = data.split('\r\n');

    // Skip first line, it is titles
    for(var i = 1; i < lines.length; i++)
    {
        var line = lines[i];

        if(line.length === 0)
        {
            continue;
        }

        var fields  = line.split(',');
        var feature = {};

        feature.type = "Feature";

        feature.geometry             = {};
        feature.geometry.type        = "Point";
        feature.geometry.coordinates =
            [
                parseFloat(fields[7]),
                parseFloat(fields[8])
            ];

        feature.properties             = {};
        feature.properties.name        = fields[0];
        feature.properties.address     = fields[2];
        feature.properties.description = fields[4];
        feature.properties.accessible  = fields[6] === "Yes";

        json.features.push(feature)
    }

    return JSON.stringify(json, null, 4);
}