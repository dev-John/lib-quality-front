export function updateObject(oldObject: Object, newValues: Object) {
  return { ...oldObject, ...newValues };
}

export function makeActionCreator(
  type: any,
  ...argumentNames: (string | number)[]
) {
  return (...args: any[]) => {
    const action = { type };

    argumentNames.forEach((argument, index) => {
      action[argumentNames[index]] = args[index];
    });

    return action;
  };
}
