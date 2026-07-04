class Food{
    private String name;
    private String Types;

    Food(String name,String Types){
        this.name = name;
        this.Types = Types;
    }
    void p(){
        System.out.print("The product is " + name + "The type is " + Types);
    }
    
public String getName(){
    return name;
}
public void setName(String name){
    this.name = name;
}
}



class Sweets extends Food {
    String Flavor;

    
  Sweets(String Flavor,String name,String Types){
      super(name,Types);
      this.Flavor = Flavor;
  }

  

  void pi(){
        System.out.print("The product is " + getName());
    }

}

public class Main{
    public static void main(String[] args){
        Food f = new Food("hotdog", "frozen");
        Food fo = new Sweets("strawberry", "Lolipop", "Candy");
        f.p();
        fo.p();
        



    }
}