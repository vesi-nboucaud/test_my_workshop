sap.ui.define([
    "sap/ui/core/Fragment"
],
    function (Fragment) {
        "use strict";

        return {
            onInputExercise13LiveChange: function (oEvent) {
                // oSource = Input control, the source of the event
                let oSource = oEvent.getSource();
                // sValue = the value of the input field
                let sValue = oEvent.getParameters()?.value;

                // to avoid an error, check if the Input exist
                if (oSource) {
                    // Take a look at setValueState and setValueStateText methods for sap.m.Input
                    // reset the input value state
                    // reset the input state text

                    // if the input field has no value
                    if (!sValue || sValue.length <= 0) {
                        // Take a look at setValueState and setValueStateText methods for sap.m.Input
                        // set the input value state to error
                        // set the input state message to a suitble error message
                    }
                }
            }

        };
    });