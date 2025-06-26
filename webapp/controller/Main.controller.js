sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/ui/core/InvisibleMessage",
    "com/vesi/zfaca_accessibility_training/model/models",
    "com/vesi/zfaca_accessibility_training/exercises/Exercise13",
    "com/vesi/zfaca_accessibility_training/exercises/Exercise14",
    "com/vesi/zfaca_accessibility_training/exercises/Exercise15",
    "com/vesi/zfaca_accessibility_training/exercises/Exercise16",
    "com/vesi/zfaca_accessibility_training/exercises/Exercise17"
],
    function (Controller, Fragment, MessageToast, InvisibleMessage, models, Exercise13, Exercise14, Exercise15, Exercise16, Exercise17) {
        "use strict";

        return Controller.extend("com.vesi.zfaca_accessibility_training.controller.Main", {
            onInit: function () {
                // EXERCISE 15
                this.oInvisibleMessage = InvisibleMessage.getInstance();
            },

            onButtonUnlockExerciseAnswerPress: function (oEvent) {
                let oButton = oEvent.getSource();
                let aCustomData = oButton?.getCustomData();
                let oCustomData = aCustomData.length ? aCustomData[0] : null;

                let oPasswordInput = this.getView().byId("idExerciseAnswerPassInput");
                oPasswordInput?.setValue("");
                oPasswordInput?.setValueState("None");

                let oExerciseInput = this.getView().byId("idExerciseNumberInput");
                oExerciseInput?.setValue(oCustomData?.getValue());

                let oPopover = this.getView().byId("idExerciseAnswerPassPopover");
                oPopover?.openBy(oButton);
            },

            onUnlockButtonPress: function (oEvent) {
                let oPasswordInput = this.getView().byId("idExerciseAnswerPassInput");
                let sPassword = oPasswordInput?.getValue();

                let oExerciseInput = this.getView().byId("idExerciseNumberInput");
                let sExerciseNumber = oExerciseInput?.getValue();

                if (sExerciseNumber && sExerciseNumber.length && sPassword && sPassword.length) {
                    let sModelName = "oExercise" + sExerciseNumber + "FragmentModel";
                    let oModel = this.getView().getModel(sModelName);
                    let oData = oModel?.getData();

                    if (oData && oData.answerPass && oData.answerPass.length && oData.answerPass === this.getOwnerComponent()._enc(sPassword)) {
                        let oPopover = this.getView().byId("idExerciseAnswerPassPopover");
                        oPopover?.close();

                        let sParentFragmentId = this.getView().createId(oData.parentFragmentId);
                        let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, oData.fragmentId) : null;
                        let sAnswerDialogId = "idAnswer" + sExerciseNumber + "Dialog";
                        let oAnswerDialog = sFragmentId ? Fragment.byId(sFragmentId, sAnswerDialogId) : null;
                        oAnswerDialog.open();
                    } else {
                        oPasswordInput.setValueState("Error");
                    }
                }
            },

            onInputnlockSubmit: function (oEvent) {
                this.onUnlockButtonPress(oEvent);
            },

            onCopyButtonPress: function (oEvent) {
                let oButton = oEvent.getSource();
                let aCustomData = oButton?.getCustomData();
                let oCustomData = aCustomData.length ? aCustomData[0] : null;
                let sValue = oCustomData?.getValue();

                navigator.clipboard.writeText(models._dec(sValue));

                MessageToast.show(this._getText("Button.copy.message", null), {
                    duration: 1000
                });
            },

            onCloseButtonDialogPress: function (oEvent) {
                let oSource = oEvent.getSource();
                let oDialog = oSource.getParent();
                oDialog?.close();
            },

            // ########################################################
            // # PRIVATE                                              #
            // ########################################################

            _getRouter: function () {
                let UIComponent = sap.ui.require('sap/ui/core/UIComponent');
                return UIComponent.getRouterFor(this);
            },

            _getText: function (sTextId, aParams) {
                return this.getView().getModel("i18n").getResourceBundle().getText(sTextId, aParams);
            },

            // ########################################################
            // # EXERCISE 01                                          #
            // ########################################################

            onFullDeliveryLinkPress: function (oEvent) {
                let oSource = oEvent.getSource();
                let sLinkBindingPath = oSource ? oSource.getBindingContext().getPath() : null;
                let sParentFragmentId = this.getView().createId("idRoleFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idModifyLinkRoleIntoButtonRoleFragment") : null;
                let oPopover = sFragmentId ? Fragment.byId(sFragmentId, "idExercise01FullDelliveryPopover") : null;

                if (oSource && sLinkBindingPath && oPopover) {
                    oPopover.bindElement(sLinkBindingPath);
                    oPopover.openBy(oSource);
                }
            },

            onCloseButtonFullDelliveryPopoverPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idRoleFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idModifyLinkRoleIntoButtonRoleFragment") : null;
                let oPopover = sFragmentId ? Fragment.byId(sFragmentId, "idExercise01FullDelliveryPopover") : null;

                if (oPopover) {
                    oPopover.close();
                }
            },

            // ########################################################
            // # EXERCISE 02                                          #
            // ########################################################

            onOpenDialogButtonExercise02Press: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idRoleFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idDefineAriaHasPopupFragment") : null;
                let oDialog = sFragmentId ? Fragment.byId(sFragmentId, "idExercise02Dialog") : null;

                if (oDialog) {
                    oDialog.open();
                }
            },

            onCloseButtonExercise02Press: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idRoleFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idDefineAriaHasPopupFragment") : null;
                let oDialog = sFragmentId ? Fragment.byId(sFragmentId, "idExercise02Dialog") : null;

                if (oDialog) {
                    oDialog.close();
                }
            },

            onOpenMenuButtonExercise02Press: function (oEvent) {
                let oSource = oEvent.getSource();
                let sParentFragmentId = this.getView().createId("idRoleFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idDefineAriaHasPopupFragment") : null;
                let oMenu = sFragmentId ? Fragment.byId(sFragmentId, "idExercise02Menu") : null;

                if (oMenu) {
                    oMenu.openBy(oSource, false, "end center");
                }
            },

            // ########################################################
            // # EXERCISE 03                                          #
            // ########################################################

            onGoToExercise03ButtonPress: function (oEvent) {
                this.getOwnerComponent().getRouter().navTo("RouteDefineLandmark");
            },

            // ########################################################
            // # EXERCISE 09                                          #
            // ########################################################

            _messageToastExercise09: function (oEvent, sTextId) {
                let oSource = oEvent.getSource();
                let oItemBindingContext = oSource ? oSource.getBindingContext() : null;
                let oItemObject = oItemBindingContext ? oItemBindingContext.getObject() : null;

                MessageToast.show(this._getText(sTextId, oItemObject.Item), {
                    duration: 5000
                });
            },

            onButtonEditTableColumnPress: function (oEvent) {
                this._messageToastExercise09(oEvent, "Exercise09.fragment.table.column.button.edit.press");
            },

            onButtonDeleteTableColumnPress: function (oEvent) {
                this._messageToastExercise09(oEvent, "Exercise09.fragment.table.column.button.delete.press");
            },

            // ########################################################
            // # EXERCISE 12                                          #
            // ########################################################

            onMessageDialogButtonOpenPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idAccessibleNameFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idProvidingLabelsForPopupsFragment") : null;
                let oDialog = sFragmentId ? Fragment.byId(sFragmentId, "idExercise12Dialog") : null;

                if (oDialog) {
                    oDialog.open();
                }
            },

            onCloseButtonExercise12DialogPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idAccessibleNameFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idProvidingLabelsForPopupsFragment") : null;
                let oDialog = sFragmentId ? Fragment.byId(sFragmentId, "idExercise12Dialog") : null;

                if (oDialog) {
                    oDialog.close();
                }
            },

            // ########################################################
            // # EXERCISE 13                                          #
            // ########################################################

            Exercise13: Exercise13,

            onInputExercise13LiveChange: function (oEvent) {
                this.Exercise13.onInputExercise13LiveChange(oEvent);
            },

            // ########################################################
            // # EXERCISE 14                                          #
            // ########################################################

            Exercise14: Exercise14,

            validateForm: function (oFirstNameInput, oLastNameInput, oEmailInput) {
                var bValid = true;

                if (!oFirstNameInput.getValue()) {
                    oFirstNameInput.setValueState("Error");
                    bValid = false;
                } else {
                    oFirstNameInput.setValueState("None");
                }

                if (!oLastNameInput.getValue()) {
                    oLastNameInput.setValueState("Error");
                    bValid = false;
                } else {
                    oLastNameInput.setValueState("None");
                }

                let emailRegex = /^\S+@\S+\.\S+$/;

                if (!emailRegex.test(oEmailInput.getValue())) {
                    oEmailInput.setValueState("Error");
                    bValid = false;
                } else {
                    oEmailInput.setValueState("None");
                }

                return bValid;
            },

            // ########################################################
            // # EXERCISE 15                                          #
            // ########################################################
            Exercise15: Exercise15,

            // ########################################################
            // # EXERCISE 16                                          #
            // ########################################################

            Exercise16: Exercise16,

            onOpenPopoverButtonExercise16Press: function (oEvent) {
                let oSource = oEvent.getSource();
                let sParentFragmentId = this.getView().createId("idKeyboardNavigationFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idUseCommandExecutionFragment") : null;
                let oPopover = sFragmentId ? Fragment.byId(sFragmentId, "idExercise16Popover") : null;

                if (oPopover) {
                    oPopover.openBy(oSource);
                }
            },

            onPopoverSave: function (oEvent) {
                Exercise16.onPopoverSave(oEvent);
            },

            onPopoverDelete: function (oEvent) {
                Exercise16.onPopoverDelete(oEvent);
            },

            // ########################################################
            // # EXERCISE 17                                          #
            // ########################################################
            Exercise17: Exercise17,

        });
    });
