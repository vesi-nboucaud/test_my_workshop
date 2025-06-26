sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/core/util/MockServer",
    "sap/ui/model/odata/v2/ODataModel",
], 
function (JSONModel, Device, MockServer, ODataModel) {
    "use strict";

    return {
        /**
         * Provides runtime info for the device the UI5 app is running on as JSONModel
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createImagesModel: function () {
            let sPath = sap.ui.require.toUrl("com/vesi/zfaca_accessibility_training/images");
            let oImages = {
                "exercise08": sPath + "/notebook.png",
                "exercise03": sPath + "/measures.png"
            };
            let oModel = new JSONModel(oImages);

            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createMockDataModel: function () {
            let sPath = sap.ui.require.toUrl("com/vesi/zfaca_accessibility_training/localService");
            let sUrl = sPath + "/mockdata/ZSRHR_ACCESS_DB_SRV/";
            let oMockServer = new MockServer({
                rootUri: sUrl
            });
            let sMetadataUrl = sPath + "/metadata.xml"// url to the service metadata document
            let sMockdataBaseUrl = sPath + "/mockdata"// base url which contains the mockdata
            oMockServer.simulate(sMetadataUrl, {
                'sMockdataBaseUrl': sMockdataBaseUrl,
                'bGenerateMissingMockData': true
            });
            oMockServer.start();

            let oModel = new ODataModel(sUrl, {
                annotationURI: sMetadataUrl,
                canonicalRequests: true,
                defaultBindingMode: "TwoWay"
            });
            return oModel;
        },

        _dec: function (str) {
            return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
                return '%' + c.charCodeAt(0).toString(16).padStart(2, '0');
            }).join(''));
        }
    };

});