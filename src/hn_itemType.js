
class ItemType {
    static JOB = Symbol("job")
    static STORY = Symbol("story")
    static COMMENT = Symbol("comment")
    static POLL = Symbol("poll")
    static POLLOPT = Symbol("pollopt")

    constructor(name){
        this.name = name
    }
}