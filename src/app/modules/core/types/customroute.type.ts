import { Route } from "@angular/router";

export type CustomRoute = Route & {
    text? : string;
}

export type CustomRoutes = CustomRoute[];