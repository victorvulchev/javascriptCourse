function task(worker){
    if(worker.dizziness){
        let toAdd = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated = worker.levelOfHydrated + toAdd;
        worker.dizziness = false;
    }
    return worker
}
task({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false })