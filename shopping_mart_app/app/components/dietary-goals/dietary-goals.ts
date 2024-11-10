import { EventData, NavigatedData, Page } from '@nativescript/core';
import { DietaryGoalsViewModel } from './dietary-goals-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new DietaryGoalsViewModel();
}