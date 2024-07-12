import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import StopwatchBtn from './StopwatchBtn'

test("Tests StopwatchBtn", async () => {
    const app = render(<StopwatchBtn onFinish={() => { }} />)
    expect(app).toMatchSnapshot()
})

test('change css class', () => {
    const appDifCSS = render(<StopwatchBtn className="new-class" onFinish={() => { }} />)
    expect(appDifCSS).toMatchSnapshot()

})

