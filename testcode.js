{const namesArray = ['anas','ahmad','flix'];

  // الاسم الذي تريد البحث عنه
  const targetName = setUserEmail();
  
  // استخدم indexOf للتحقق مما إذا كان الاسم موجودًا أم لا
//   const isNamePresent = namesArray.indexOf(targetName) !== -1;
  
  // أو استخدم includes
  const isNamePresent = namesArray.includes(targetName);
  
  if (isNamePresent) {
    console.log(`${targetName} موجود في المصفوفة!`);
  } else {
    console.log(`${targetName} غير موجود في المصفوفة.`);
  }}