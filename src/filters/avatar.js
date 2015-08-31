export default (item) => {
  if (item.self) {
      return this.store.user.img;
  }
  let session = this.store.sessionList[this.store.sessionId],
      user = this.store.userList.filter(user => user.id === session.userId)[0];
  
  return user && user.img;
}
