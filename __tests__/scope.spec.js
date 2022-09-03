const Scope = require("../scope");


describe("walk", () => {
  test("scope测试", () => {
    const root=new Scope()
    root.add('a')

    const child=new Scope({
      parent:root
    })
    child.add('b')

    const grandChild=new Scope({
      parent:child
    })
    grandChild.add('d')

    console.log(grandChild); 

    expect(child.findDefiningScope('a')).toBe(root)
    expect(child.contains('a')).toEqual(true)


    expect(child.findDefiningScope('b')).toBe(child)
    expect(child.contains('b')).toEqual(true)

    expect(grandChild.findDefiningScope('d')).toBe(grandChild)
    expect(grandChild.contains('d')).toEqual(true)

    expect(child.findDefiningScope('c')).toBe(null)
    expect(child.contains('c')).toEqual(false)


  })
})
