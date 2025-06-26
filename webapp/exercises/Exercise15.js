sap.ui.define([
    "sap/ui/core/Fragment"
],
    function (Fragment) {
        "use strict";

        return {
            onSubmitExercise15ButtonPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idErrorManagementContextChangesFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idInvisibleMessagingFragment") : null;
                let oFlexBox = sFragmentId ? Fragment.byId(sFragmentId, "idExercise15VerticalFlexBox") : null;
                let oInput = sFragmentId ? Fragment.byId(sFragmentId, "idExercise15Input") : null;

                if (oFlexBox && oInput) {
                    sap.ui.require(['sap/m/MessageStrip'], (MessageStrip) => {
                        let sMessage;
                        let oMessageStrip = new MessageStrip({
                            showCloseButton: true,
                            showIcon: true
                        }).addStyleClass("sapUiSmallMarginTop");

                        if (oInput.getValue() && oInput.getValue().length > 0) {
                            sMessage = "Polite type of InivisibleMessage was created created and added to the static area.";
                            oMessageStrip.setType("Success");
                            oMessageStrip.setText(sMessage);
                            oFlexBox.addItem(oMessageStrip);
                            //Take a look at announce method for sap.ui.core.InvisibleMessage control
                            //this.oInvisibleMessage
                        } else {
                            sMessage = "Assertive type of InivisibleMessage was created and added to the static area.";
                            oMessageStrip.setType("Error");
                            oMessageStrip.setText(sMessage);
                            oFlexBox.addItem(oMessageStrip);
                            //Take a look at announce method for sap.ui.core.InvisibleMessage control
                            //this.oInvisibleMessage
                        }

                        setTimeout(function () {
                            oMessageStrip.close();
                            oMessageStrip.destroy();
                        }, 4000);
                    });
                }
            }

        };
    });