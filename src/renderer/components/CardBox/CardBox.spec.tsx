import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import CardBox from './CardBox'

test("Tests Login", async () => {
    const app = render(<CardBox />)
    expect(app).toMatchSnapshot()
})