const ENDPOINT = "https://formsubmit.co/ajax/nvztinfo@gmail.com";

export async function sendContact(fields: Record<string, string>, subject: string): Promise<boolean> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...fields,
        _subject: subject,
        _template: "table",
        _captcha: "false",
        _honey: "",
      }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true || data.success === "true";
  } catch {
    return false;
  }
}
