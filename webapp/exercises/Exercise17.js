sap.ui.define([
    "sap/ui/core/Fragment"
],
    function (Fragment) {
        "use strict";

        return {
            onOpenPopoverButtonPress: function (oEvent) {
                let sParentFragmentId = this.getView().createId("idKeyboardNavigationFragment");
                let sFragmentId = sParentFragmentId ? Fragment.createId(sParentFragmentId, "idSetUpFocusHandlingFragment") : null;
                let oObjectPageSubSection = sFragmentId ? Fragment.byId(sFragmentId, "idExercise17ObjectPageSubSection") : null;
                let oSource = oEvent.getSource();

                if (!this._oExercise17Popover) {
                    sap.ui.require(['sap/m/Popover', 'sap/m/VBox', 'sap/m/Text', 'sap/m/Link', 'sap/m/Toolbar', 'sap/m/ToolbarSpacer', 'sap/m/Button'], (Popover, VBox, Text, Link, Toolbar, ToolbarSpacer, Button) => {
                        this._oExercise17Popover = new Popover({
                            id: Fragment.createId(sFragmentId, "idExercise17Popover"),
                            title: this._getText("Exercise17.fragment.popover.title", null),
                            content: [
                                new VBox({
                                    id: Fragment.createId(sFragmentId, "idExercise17PopoverContentVBox"),
                                    items: [
                                        new Text({
                                            id: Fragment.createId(sFragmentId, "idExercise17PopoverContentLine01Text"),
                                            text: this._getText("Exercise17.fragment.popover.content.text.line01", null)
                                        }).addStyleClass("sapUiSmallMarginTopBottom"),
                                        new Text({
                                            id: Fragment.createId(sFragmentId, "idExercise17PopoverContentLine02Text"),
                                            text: this._getText("Exercise17.fragment.popover.content.text.line02", null)
                                        }).addStyleClass("sapUiSmallMarginBottom"),
                                        new Link({
                                            id: Fragment.createId(sFragmentId, "idExercise17PopoverContentLink"),
                                            text: this._getText("Exercise17.fragment.popover.content.link", null)
                                        })
                                    ]
                                })
                            ],
                            footer: new Toolbar({
                                content: [
                                    new ToolbarSpacer({
                                        id: Fragment.createId(sFragmentId, "idExercise17PopoverToolbarSpacer")
                                    }),
                                    new Button({
                                        id: Fragment.createId(sFragmentId, "idExercise17PopoverCloseButton"),
                                        text: this._getText("Exercise17.fragment.popover.button.close", null),
                                        press: function () {
                                            this._oExercise17Popover.close();
                                        }.bind(this)
                                    })
                                ]
                            }),
                            contentWidth: "30%"
                        }).addStyleClass("sapUiResponsivePadding--content sapUiResponsivePadding--header");

                        // Take a look at setInitialFocus method for sap.m.Popover control
                        // Popover control => this._oExercise17Popover
                        // Close Button control ID => Fragment.createId(sFragmentId, "idExercise17PopoverCloseButton")

                        oObjectPageSubSection.addDependent(this._oExercise17Popover);
                        this._oExercise17Popover.openBy(oSource);
                    });

                } else {
                    // Take a look at setInitialFocus method for sap.m.Popover control
                    // Popover control => this._oExercise17Popover
                    // Close Button control ID => Fragment.createId(sFragmentId, "idExercise17PopoverCloseButton")
                    this._oExercise17Popover.openBy(oSource);
                }
            }

        };
    });