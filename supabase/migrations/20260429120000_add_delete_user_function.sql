create or replace function delete_user_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Check if the user is authenticated
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  -- Delete the user from auth.users
  -- The ON DELETE CASCADE on public.users will handle cleaning up public data
  delete from auth.users where id = auth.uid();
end;
$$;
