export default function FirebaseLooper(snapshot) {
  const items = [];
  snapshot.forEach((doc) => {
    items.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return items;
}
