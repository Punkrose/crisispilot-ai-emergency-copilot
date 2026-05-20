# Product Notes

## Design direction

CrisisPilot should feel futuristic, fast, and calm under pressure. The interface is not meant to be a dense analytics dashboard. It is an emergency-first UI with large controls, clear priority cards, and a phone-like safety mode.

Visual principles:

- Pure dark command-center background
- Cyan/green safety accent
- Red only for immediate danger
- Large readable typography
- One-tap action cards
- Mobile-first emergency assistant feel
- Minimal cognitive load

## Key user scenarios

1. A family receives a flood warning and needs to leave quickly.
2. A household loses power and needs a safe battery/fridge/water plan.
3. Someone is injured and a family member needs calm first-aid guidance until help arrives.
4. A small community needs to confirm who is safe and who is missing.
5. A user needs to send a short status update to trusted contacts without typing under stress.

## Safety principles

- Do not replace official emergency services.
- Prefer trusted local instructions when available.
- Keep guidance short and actionable.
- Clearly separate urgent actions from general advice.
- Support offline fallback checklists.
- Encourage contacting emergency services when injury or immediate danger is detected.

## Future features

- Offline emergency checklist packs.
- Trusted contact graph.
- Household supply inventory.
- Local shelter map.
- Multilingual emergency instructions.
- SMS-ready status messages.
- Panic-mode large text UI.
- Wearable / low-battery mode.

## Example emergency object

```json
{
  "event_type": "flood_warning",
  "risk_level": "elevated",
  "location_radius_km": 3.2,
  "household_checked_in": 3,
  "household_total": 4,
  "priority_action": "Move to higher ground now",
  "must_bring": ["ID", "water", "charger", "medication"],
  "fallback": "If mobile data fails, use the printed neighborhood route card"
}
```
