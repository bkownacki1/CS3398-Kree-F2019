//Author(s): Shelby Jordan, Sam Pugh
package threesolid;

public class Manager implements IManage {

	public Manager() {
	}
	
	@Override
	public void manage() {
		// TODO Auto-generated method stub

	}

	@Override
	public void setWorker(IWorker w) {
		worker = w;

	}
	
	IWorker worker;

}
