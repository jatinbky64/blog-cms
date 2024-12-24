export function removeTimeFromCreatedAt(createdAt) {
    // Use the split method to separate date and time components
    const [datePart] = createdAt.split('T');
    return datePart;
  }