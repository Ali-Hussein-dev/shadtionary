An input OTP is a **fixed-length code entry control** for one-time passwords and verification codes — a row of individual slots that shows how many characters are expected and advances focus as the user types or pastes.

The pattern is **segmented code entry**: use when users must enter a short, fixed-format string such as a 2FA code, SMS confirmation, or email verification token. Unlike a text field, the layout signals length and grouping; unlike a PIN pad, it stays keyboard-first with paste and auto-advance built in.

## Also known as

- **Verification code input** — the label users see in sign-in and account-recovery flows

## Component Anatomy

| Part | Role |
|------|------|
| **InputOTP** | Root — wraps the underlying `OTPInput`, owns value, `maxLength`, paste handling, and focus management |
| **InputOTPGroup** | Slot group — clusters adjacent slots (e.g., three digits before a separator) |
| **InputOTPSlot** | Character slot — one cell per index; shows the typed character, active ring, and fake caret |
| **InputOTPSeparator** | Visual divider — optional dash or icon between groups for readability (e.g., `123-456`) |

## Common use cases

Use an input OTP when authentication or account flows need a **short, fixed-length code**:

- **Two-factor authentication** — TOTP or authenticator-app codes at sign-in
- **SMS or email verification** — confirm phone number or email during onboarding
- **Passwordless login** — magic-link follow-up or one-time sign-in codes
- **Account recovery** — backup codes or identity verification after a reset request
- **Payment or transaction confirmation** — bank or card issuer step-up codes

Avoid an input OTP when the value is **variable length or free-form** (use a text field), chosen from a **list** (use a select), or entered via **mouse on a keypad-only surface** where a numeric PIN pad fits better. Do not use separate boxes for **long tokens or API keys** — a single masked input with copy support is easier to paste and audit.

**Six-digit SMS codes** are the default shape — `maxLength={6}` with six `InputOTPSlot` indices. **Grouped formats** split slots with `InputOTPSeparator` (3-3 or 4-2) so users match how codes appear in messages. Set `inputMode="numeric"` and `autoComplete="one-time-code"` so mobile keyboards and password managers offer the right autofill. Wrap in `Field` with `FieldLabel` and `FieldError` when the code sits in a labeled form alongside resend or timer actions.
