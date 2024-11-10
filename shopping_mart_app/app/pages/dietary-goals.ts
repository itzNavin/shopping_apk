import { EventData, Page, NavigatedData } from '@nativescript/core';
import { DietaryGoalsViewModel } from '../view-models/dietary-goals-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new DietaryGoalsViewModel();
}