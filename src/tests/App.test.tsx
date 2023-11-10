import App from "../App"
import {screen,render} from '@testing-library/react'
import {describe,it} from 'vitest'
describe("App",()=>{
    it("Renders app",()=>{
        render(<App/>)
        expect(screen.getByText('dashboard')).toBeDefined()
    })
})