import { LayoutLink} from "../Layout/Layout.styled";

export const Layout = () => {
    return (
        <nav>
            <LayoutLink to="/">Home</LayoutLink>
            <LayoutLink to="/movies">Movie</LayoutLink>
        </nav>
    )
}