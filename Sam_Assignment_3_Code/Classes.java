package threesolid;

class Worker implements IWorkable, IFeedable{
	public void work() {
		// ....working
	}

	public void eat() {
		//.... eating in launch break
	}
}

class Robot implements IWorkable{
    public void work(){
        // ......working
    }
}

class SuperWorker implements IWorkable, IFeedable{
    
	public void work() {
		//.... working much more
	}

	public void eat() {
		//.... eating in launch break
	}
}

class Manager {
    
    // declare new worker object
    IWorkable worker;
    
    public Manager(){
        // constructor
    }

    // set method for private variable
	public void setWorker(IWorker w) {
		worker=w;
	}

	public void manage() {
		worker.work();
	}
}
