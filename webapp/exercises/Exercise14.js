sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/m/MessageStrip"
],
    function (Fragment, MessageStrip) {
        "use strict";

        return {
            onSubmitButtonPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idErrorManagementContextChangesFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idMessageStripFragment") : null;
                let oFirstNameInput = sFragmentId ? Fragment.byId(sFragmentId, "idExercise14FirstNameInput") : null;
                let oLastNameInput = sFragmentId ? Fragment.byId(sFragmentId, "idExercise14LastNameInput") : null;
                let oEmailInput = sFragmentId ? Fragment.byId(sFragmentId, "idExercise14EmailInput") : null;

                let oPanel = sFragmentId ? Fragment.byId(sFragmentId, "idExercise14Panel") : null;
                let oMessageStrip = sFragmentId ? Fragment.byId(sFragmentId, "idExercise14MessageStrip") : null;

                if (oPanel && oMessageStrip) {
                    oPanel.removeContent(oMessageStrip);
                    oMessageStrip.destroy();
                }
                
                let sMessageStripId = Fragment.createId(sFragmentId, "idExercise14MessageStrip");
                
                if (oFirstNameInput && oLastNameInput && oEmailInput && this.validateForm(oFirstNameInput, oLastNameInput, oEmailInput)) {
                    // Success message strip 
                    // let oSuccessMessageStrip =
                    // HINT! Work with the sMessageStripId
                    // oPanel.addContent(oSuccessMessageStrip);
                    
                    oFirstNameInput.setValue("");
                    oLastNameInput.setValue("");
                    oEmailInput.setValue("");

                } else {
                    // Error message strip 
                    // let oErrorMessageStrip =
                    // HINT! Work with the sMessageStripId
                    // oPanel.addContent(oErrorMessageStrip);
                }
            },

        };
    });