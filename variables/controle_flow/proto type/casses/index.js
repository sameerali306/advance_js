class student {
    constructor(givenname,givenage,givenclass) {
        this.name=givenname;
        this.age=givenage;
        this.classs=givenclass
        
    }
}
  const studentDetail= new student("sameer",20,12);  
  console.log(studentDetail)


class student2 extends student {
    constructor(givenname,givenage,givenclass,givenschool) {
        super(givenname,givenage,givenclass)
        this.school=givenschool
        
    }
}
const student2Info = new student2("shakeel",22,12,"akhss");
console.log(student2Info)