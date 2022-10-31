import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url =
    "https://media1.giphy.com/media/d2PqO9s7M9CNO/giphy.gif?cid=c978d6611x9r5eapft0b6pnof2fdwyj3leihdgtkpxfotw9a&rid=giphy.gif&ct=g";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL, el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    //console.log(screen.getByRole("img").src);
    //expect(screen.getByRole("img").src).toBe(url);
    //expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el título del componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
