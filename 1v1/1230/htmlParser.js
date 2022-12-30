class Parser{
  constructor() {
    this.state=this.start
  }

  start() {
    
  }

  end() {
    
  }

  write(data) {
    for (let i = 0; i < data.length; i++) {
      this.state = this.state(data[i]);
   }
  }

}




module.exports = { Parser };