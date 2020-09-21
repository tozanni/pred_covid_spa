import { extend, localize, setInteractionMode } from "vee-validate";
import es from "vee-validate/dist/locale/es.json";
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});


extend('biometry', {
    params: ['leukocytes', 'neutrophils' , 'lymphocytes'],
    validate(value, { leukocytes, neutrophils, lymphocytes }) {
      return !!leukocytes && !!neutrophils && !!lymphocytes;
    },
    message: 'Los campos "Leucocitos", "Neutrófilos", "Linfocitos deben ir acompañados"'
  });

localize("es", es);

