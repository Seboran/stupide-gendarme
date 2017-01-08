
	
!^j::
Loop
{
    Sleep, 500
    GetKeyState, state, j, T
	if state = D   ; The key has been released, so break out of the loop.
        break
		
    ; ... insert here any other actions you want repeated.
	Click
	Send, {ENTER}
}

return
	  
	 
	      
