function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        fetch("https://demo.codershood.info/react-better-loading/api/api.php?type=user_details")
            .then(response => {
                return response.json();
            })
            .then(data => {
             resolve(data);
            })
            .catch(error => {
                reject(null);
            });
    });
}

function fetchPostDetails() {
    return new Promise((resolve, reject) => {
        fetch("https://demo.codershood.info/react-better-loading/api/api.php?type=post_details")
            .then(response => {
                return response.json();
            })
            .then(data => {
             resolve(data);
            })
            .catch(error => {
                reject(null);
            });
    });
}

function fetchAuthors() {
    return new Promise((resolve, reject) => {
        fetch("https://demo.codershood.info/react-better-loading/api/api.php?type=authors")
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(null);
            });
    });
}

export function fetchAppData() {
    const userPromise = fetchUserDetails();
    const postDetailsPromise = fetchPostDetails();
    const authorsPromise = fetchAuthors();
    return {
        userDetails: wrapPromise(userPromise),
        postDetails: wrapPromise(postDetailsPromise),
        authors: wrapPromise(authorsPromise)
    };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}
