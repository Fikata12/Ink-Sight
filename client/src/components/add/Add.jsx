export default function Add() {
    return (
        <>
            <div class="row container mx-auto">
                <h2 class="text-center">Add Review</h2>
                <hr />
                <div class="col-sm-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
                    <form method="post">
                        <div class="mb-3">
                            <label class="form-label" htmlFor="title">Title</label>
                            <input class="form-control" id="title" />
                            <span class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="isbn">ISBN</label>
                            <input class="form-control" id="isbn" />
                            <span class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="review">Review</label>
                            <textarea class="form-control" id="review" rows="5"></textarea>
                            <span class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="url">Image Url</label>
                            <input type="url" class="form-control" id="url" />
                            <span class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <input class="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}