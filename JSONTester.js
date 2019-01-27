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

var fs = require('fs');

var sourcePath = process.argv[3];
var encoding = process.argv[4];

fs.readFile(sourcePath, encoding,
    function(err, data)
    {
        if(err)
        {
            throw err;
        }

        var converterScript = process.argv[2];
        var converter       = require(converterScript);
        var jsonString      = converter.doConvert(data);

        console.log(jsonString);
    });


