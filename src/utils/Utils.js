export default function () {
    const debounce = (callback, maxDuration) => {
        let timer;

        return (...args) => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                callback.apply(this, args);
            }, maxDuration);
        }
    }

    const throttle = (callback, maxDuration) => {
        let throttled = false;

        return (...args) => {
            if (throttled === false) {
                callback.apply(this, args);

                throttled = true;

                setTimeout(() => throttled = false, maxDuration);
            }
        }
    }

    return {
        debounce,
        throttle,
    }
}