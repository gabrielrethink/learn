import { describe, expect, test } from "@jest/globals";
import axios from "axios";

describe("user get", () => {
  test("Happy = > User Get ", async () => {
    const response = await axios.get("http://localhost:3030/api/v1/users");

    expect(response.data).toStrictEqual({ user: "gabriel" });
  });
});
