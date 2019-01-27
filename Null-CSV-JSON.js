// Copyright 2018 TerraTap Technologies Inc.
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
    var json = [];

    var lines = data.split('\r\n');

    for(var i = 0; i < lines.length; i++)
    {
        var line = lines[i];

        if(line.length === 0)
        {
            continue;
        }

        var fields = line.split(',');
        var entry = {};

        for(var j = 0; j < fields.length; j++)
        {
            entry['col-' + j] = fields[j];
        }

        json.push(entry);
    }

    return JSON.stringify(json, null, 4);
}
