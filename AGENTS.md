<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## U CAN frontend architecture
- Keep all functionality frontend-only and keep demonstration records separate from future production data sources, because this project is a presentation prototype.
- Use TanStack file routes with shared public and role workspace modules, because all page navigation must retain router integration and per-page metadata.
- Use semantic tokens in the global stylesheet and the shared Button control, because public and application experiences must remain visually consistent.
- Role workspace navigation is a demo selector, not authorization; never use it to authorize future protected data.
