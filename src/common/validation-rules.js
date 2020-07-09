import { extend, localize, setInteractionMode } from "vee-validate";
import es from "vee-validate/dist/locale/es.json";
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
localize("es", es);

