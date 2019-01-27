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
    var original  = data;
    var converted = {}

    if(typeof(original) === 'string' || original instanceof String)
    {
        original = JSON.parse(data);
    }

    converted.type     = "FeatureCollection";
    converted.features = [];

    var originalFeatures = original.features;

    originalFeatures.forEach(
        function(originalFeature)
        {
            var convertedFeature = {};

            convertedFeature.type               = "Feature";
            convertedFeature.geometry           = originalFeature.geometry;
            convertedFeature.properties         = {};
            convertedFeature.properties.name    = originalFeature.properties.FacilityName;
            convertedFeature.properties.address = originalFeature.properties.Address;
            converted.features.push(convertedFeature);
        });

    return JSON.stringify(converted, null, 4);
}
