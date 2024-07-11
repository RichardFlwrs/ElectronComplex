export const printTimerOnDOM = (TIMER_ID: string, _t: number, isRunning: boolean) => {
    const el = document.getElementById(TIMER_ID)
    if (el) {
        el.setAttribute("data-timer", _t.toString())
        el.setAttribute("data-isRunning", isRunning.toString())
    }
}

export const getValueFromDOM = (TIMER_ID: string): number => {
    const el = document.getElementById(TIMER_ID)
    return el ? Number(el.getAttribute("data-timer")) : 0
}

export const getBooleanFromDOM = (TIMER_ID: string) => {
    const el = document.getElementById(TIMER_ID)
    if (el) return el.getAttribute("data-isRunning") == 'true'
    return false
}