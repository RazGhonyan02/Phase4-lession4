import React from "react";
import { dialogs } from "./constants/dialogs";

export const renderDialog = (dialogId) => {
    switch (dialogId) {
        case dialogs.CounterDialog:
            return null;
        default:
            return null
    }
}