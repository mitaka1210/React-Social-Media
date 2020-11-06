// TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed

//! Можем да се обърнем към  свойствата по два начина: u.id === u[id]
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }

    return u;
  });
};
